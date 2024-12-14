import React, { Component } from 'react';
import { connect } from 'react-redux';  
import { Card, Table, Tooltip, Button, Spin, Alert, Row, Col } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import UserView from './UserView';
import { fetchUsers, fetchUsersSuccess, fetchUsersFailure, showUsersLoading, deleteUser } from "redux/actions/Users";

class UserList extends Component {
  state = {
    userProfileVisible: false,
    selectedUser: null,
  };

  componentDidMount() {
    this.props.fetchUsers();  
  }

  deleteUser = (userId) => {
    this.props.deleteUser(userId); 
  };

  showUserProfile = (user) => {
    this.setState({
      userProfileVisible: true,
      selectedUser: user,
    });
  };

  closeUserProfile = () => {
    this.setState({
      userProfileVisible: false,
      selectedUser: null,
    });
  };

  render() {
    const { users, loading, error } = this.props;  
    console.log('users', users)
    const { userProfileVisible, selectedUser } = this.state;

    const tableColumns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        render: (address) => `${address.street}, ${address.city}, ${address.zipcode}`,
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: 'Website',
        dataIndex: 'website',
        key: 'website',
        render: (website) => <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">{website}</a>,
      },
      {
        title: 'Company',
        dataIndex: 'company',
        key: 'company',
        render: (company) => company.name,
      },
      {
        title: 'Actions',
        key: 'actions',
        render: (_, user) => (
          <div className="text-right" style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
            <Tooltip title="View">
              <Button
                type="primary"
                icon={<EyeOutlined />}
                size="small"
                onClick={() => this.showUserProfile(user)}
              />
            </Tooltip>
            <Tooltip title="Delete">
              <Button
                danger
                icon={<DeleteOutlined />}
                size="small"
                onClick={() => this.deleteUser(user.id)}
                style={{ marginLeft: 8 }}
              />
            </Tooltip>
          </div>
        ),
      },
    ];


    if (loading) {
        return (
          <Row 
            justify="center" 
            align="middle" 
            style={{ height: '100vh' }} 
          >
            <Col>
              <Spin size="large" />
            </Col>
          </Row>
        );
      }

    if (error) {
      return <Alert message="Error" description={error} type="error" showIcon />; 
    }

    return (
      <Card>
        <Table
          columns={tableColumns}
          dataSource={users}
          rowKey="id"
          pagination={{ pageSize: 5 }}
        />
        {userProfileVisible && (
          <UserView
            visible={userProfileVisible}
            data={selectedUser}
            close={this.closeUserProfile}
          />
        )}
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users.users,
  loading: state.users.loading,
  error: state.users.error,
});

const mapDispatchToProps = {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFailure,
  showUsersLoading,
  deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
