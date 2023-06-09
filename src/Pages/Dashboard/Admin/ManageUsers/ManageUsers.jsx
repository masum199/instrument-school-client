import React from 'react';
import getUser from '../../../../Hooks/getUser';

const ManageUsers = () => {
    const [users] = getUser()
    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>User Image</th>
                            <th>User Name</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user =>console.log(user) )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageUsers;