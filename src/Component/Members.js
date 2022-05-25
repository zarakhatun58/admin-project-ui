import React, { useEffect, useState } from 'react';
import Member from './Member';


const Members = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch('./members.JSON')
            .then(function (response) {
                response.json().then(function (data) {
                   setMembers(data);
                });
            }).catch(function (error) {
                console.log('Fetch Error:', error);
            });

    }, [])
    return (
        <div>
            <h3> {members.length}</h3>
            {
                members.map(member => <Member key={member.id} 
                member={member}
                > </Member>)
            }
        </div>
    );
};

export default Members;