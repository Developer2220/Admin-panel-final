import React, { useState, useEffect } from "react";
import { Stage, Layer, Image, Line } from "react-konva";
import { Button, Upload, Modal, Switch, List } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import OBJECTS from "./PlannerData";

const GRID_SIZE = 50; 
const STAGE_WIDTH = 800; 
const STAGE_HEIGHT = 600; 

const Planner = () => {
  const [objects, setObjects] = useState([]);
  const [loadedImages, setLoadedImages] = useState({});
  const [showGrid, setShowGrid] = useState(false);


  useEffect(() => {
    const images = {};
    let loadedCount = 0;

    OBJECTS.forEach((obj) => {
      if (!obj.image) {
        console.error(`Image path is missing for object: ${obj.id}`);
        return;
      }

      const img = new window.Image();
      img.src = obj.image;

      img.onload = () => {
        loadedCount++;
        images[obj.name] = img;

        if (loadedCount === OBJECTS.length) {
          setLoadedImages(images);
        }
      };

      img.onerror = () => console.error(`Failed to load image: ${obj.image}`);
    });
  }, []);

  const handleAddObject = (template) => {
    const newObject = {
      ...template,
      x: 400,
      y: 300,
      id: `object-${Date.now()}`,
    };
    setObjects((prev) => [...prev, newObject]);
  };

  const handleDragMove = (e) => {
    const node = e.target;
    const { id } = node.attrs;

    const newX = Math.max(0, Math.min(node.x(), STAGE_WIDTH - node.width()));
    const newY = Math.max(0, Math.min(node.y(), STAGE_HEIGHT - node.height()));

    node.setPosition({ x: newX, y: newY }); 

    setObjects((prev) =>
      prev.map((obj) =>
        obj.id === id ? { ...obj, x: newX, y: newY } : obj
      )
    );
  };

  const handleRemoveObject = (id) => {
    setObjects((prev) => prev.filter((obj) => obj.id !== id));
  };

  const handleClearBoard = () => {
    setObjects([]);
  };

  const handleSaveToFile = () => {
    const dataToSave = objects.map(({ id, x, y, name }) => ({
      id,
      name,
      x,
      y,
    }));

    const blob = new Blob([JSON.stringify(dataToSave, null, 2)], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "planner-layout.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleLoadFromFile = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);

        const importedObjects = data.map((item) => ({
          ...OBJECTS.find((obj) => obj.name === item.name),
          x: item.x,
          y: item.y,
          id: item.id,
        }));

        setObjects(importedObjects);
      } catch (err) {
        console.error("Error loading file:", err);
        Modal.error({
          title: "Upload Error",
          content: "Incorrect file. Please select a proper JSON file."
        });
      }
    };

    reader.readAsText(file);
  };

  const renderGrid = () => {
    const lines = [];

    for (let i = 0; i <= STAGE_WIDTH; i += GRID_SIZE) {
      lines.push(
        <Line key={`v-${i}`} points={[i, 0, i, STAGE_HEIGHT]} stroke="#ddd" />
      );
    }
    for (let j = 0; j <= STAGE_HEIGHT; j += GRID_SIZE) {
      lines.push(
        <Line key={`h-${j}`} points={[0, j, STAGE_WIDTH, j]} stroke="#ddd" />
      );
    }

    return lines;
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "10px", margin: "10px",justifyContent: "space-between", alignItems: "center"}}>
        <Button type="primary" onClick={handleSaveToFile}>
          Сохранить расстановку
        </Button>
        <Upload
          accept=".json"
          showUploadList={false}
          beforeUpload={(file) => {
            handleLoadFromFile(file);
            return false;
          }}
        >
          <Button icon={<UploadOutlined />}>Загрузить расстановку</Button>
        </Upload>
        <Button danger onClick={handleClearBoard}>
          Очистить доску
        </Button>
        <Switch
          checked={showGrid}
          onChange={() => setShowGrid((prev) => !prev)}
          checkedChildren="Сетка вкл."
          unCheckedChildren="Сетка выкл."
        />
      </div>

      <div style={{ display: "flex" }}>
        <List
          style={{ width: 200, padding: 10 }}
          dataSource={OBJECTS}
          renderItem={(obj) => (
            <List.Item onClick={() => handleAddObject(obj)} style={{ cursor: "pointer" }}>
              <List.Item.Meta
                avatar={<img src={obj.icon}  alt={obj.name}
                style={{ width: 40, height: 40, marginRight: 10 }}/>}
                title={obj.name}
              />
            </List.Item>
          )}
        />

        <Stage width={STAGE_WIDTH} height={STAGE_HEIGHT} style={{ border: "1px solid black" }}>
          <Layer>{showGrid && renderGrid()}</Layer>
          <Layer>
            {objects.map((obj) => (
              <Image
                key={obj.id}
                x={obj.x}
                y={obj.y}
                width={obj.width}
                height={obj.height}
                image={loadedImages[obj.name]}
                draggable
                id={obj.id}
                onDragMove={(e) => handleDragMove(e)}
                onClick={() => handleRemoveObject(obj.id)}
              />
            ))}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default Planner;
