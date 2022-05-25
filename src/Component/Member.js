import React from 'react';
import {  useNavigate } from 'react-router-dom';

const Member = (props) => {
    const { id, name, email, role } = props.member;
    let navigate = useNavigate();
    const url = `/member/${id}`;
    const handleFriendClick = () => {
        navigate.push(`/member${id}`)
    }

    return (

        <tbody>
            <tr>
                <td>{id} </td>
                <td><input type="checkbox" name="select"/> </td>
                <td>{name}</td>
                <td> {email}</td>
                <td>{role} </td>
                <td>
                    {/* <Link to={`/members/${member._id}`}>
                        <button className="btn btn-primary">Update</button>
                    </Link> */}
                    <button type='submit'>Update</button>
                    {/* <button
                        onClick={() => handleDelete(member._id)}
                        className="btn btn-danger ms-2"
                    >
                        Delete
                    </button> */}

                    {/* <Link className="btn btn-primary mr-2" to={`/members/${member.id}`}>
                        View
                    </Link> */}
                    {/* <Link
                        className="btn btn-outline-primary mr-2"
                        to={`/members/editMember/${member.id}`}
                    >
                        Edit
                    </Link> */}
                    {/* <Link
                        className="btn btn-danger"
                        onClick={() => deleteMember(member.id)}
                    >
                        Delete
                    </Link> */}
                </td>
                <td>
                <button>Delete</button> 
                </td>
            </tr>
        </tbody>

    );
};

export default Member;