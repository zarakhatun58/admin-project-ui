import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import MyPagination from '../MyPagination';
import Member from './../Member';



// import BootstrapTable from 'react-bootstrap-table-next';
// import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

const Home = () => {
  const [searchedVal, setSearchedVal] = useState("");
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
      <div className="container">
        <div className="py-4">
          <h1>Home Page :{members.length}</h1>
          <Table responsive="sm" className="table border shadow"  style={{height:"500px"}}>

            <thead >
              <tr>
                <th scope="col" >#</th>
                <td>select</td>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col" >Action</th>
              </tr>
            </thead>

            {members.map((member, index) => (
              <Member member={member} key={index}></Member>
            ))}
          </Table>
        </div>
        <MyPagination totPages={25} currentPage={1} pageClicked={(ele) => { }}/>
       
      </div>
    </div>
  );
};

export default Home;

{/* 
   {members
              .filter((row) =>
                // note that I've incorporated the searchedVal length check here
                !searchedVal.length || row.customer
                  .toString()
                  .toLowerCase()
                  .includes(searchedVal.toString().toLowerCase()) 
              )
              .map((member, index) => (
                <Member member={member} key={index}></Member>
              ))}
         


<Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link> */}