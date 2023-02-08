import React, { useState, useEffect } from "react";
const Dashboard = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch data from API or any data source
    const fetchData = async () => {
      const response = await fetch(
        "https://mocki.io/v1/f64da304-1917-4dd4-87a9-0907361720af"
      );
      const data = await response.json();
      console.log(data.users);
      setData(data.users);
    };
    fetchData();
  }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (key) => {
    setData([...data].sort((a, b) => (a[key] > b[key] ? 1 : -1)));
  };

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Filter data based on search term
  const filteredData = data.filter(
    (item) =>
      item.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  // Get current data
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = filteredData.slice(indexOfFirstData, indexOfLastData);

  // Pagination logic
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredData.length / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <section className="mb-4 mb-md-5">
        <div className="container pb-0 section-padding">
          <div className="">
            <div className="align-items-center row">
              <input
                className="col-6 form-control"
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container section-padding pt-0">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th onClick={() => handleSort("id")}>No.</th>
                <th onClick={() => handleSort("firstName")}>First Name</th>
                <th onClick={() => handleSort("lastName")}>Last Name</th>
                <th onClick={() => handleSort("email")}>Email</th>
                
              </tr>
            </thead>
            <tbody>
              {currentData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <nav>
            <ul className="pagination">
              {pageNumbers.map((number) => (
                <li
                  key={number}
                  style={{ cursor: "pointer" }}
                  className="page-item"
                >
                  <a onClick={() => handlePagination(number)}
                    className="page-link" >
                    {number}{" "}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div></div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
