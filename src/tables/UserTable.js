
import React from 'react'
import "rsuite/dist/rsuite.min.css";
import { Button } from "rsuite";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';


const UserTable = (props) => (
    <>
        <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="download-table-xls-button"
            table="table-to-xls"
            filename="tablexls"
            sheet="tablexls"
            buttonText="Export Data"
        />
        <table id="table-to-xls">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Mail ID</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.users.length > 0 ? (
                    props.users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.mailid}</td>
                            <td>{user.age}</td>
                            <td>
                                <Button color="blue" appearance="primary" onClick={() => {
                                    props.editRow(user)
                                }} className="button muted-button">Edit</Button>
                                <Button color="red" appearance="primary" onClick={() => props.deleteUser(user.id)} className="button muted-button">Delete</Button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>No users</td>
                    </tr>
                )
                }
            </tbody>
        </table>
    </>
);

export default UserTable;