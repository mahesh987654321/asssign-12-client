import React from "react";

const MyPortfolio = () => {
  return (
    <div>
      <h1 className="text-center text-primary my-5">MY PORTFOLIO</h1>
      <div className="overflow-x-auto w-9/12 mx-auto ">
        <table className="table  h-full">
          <tbody>
            <tr>
              <th>1</th>
              <td>Name</td>
              <td>Mahesh Biswas</td>
            </tr>

            <tr>
              <th>2</th>
              <td>Age</td>
              <td>21</td>
            </tr>

            <tr>
              <th>3</th>
              <td>Education</td>
              <td>BBA HONOURS 2nd year</td>
            </tr>
            <tr className="active">
              <th>4</th>
              <td>List of skills I have as a web developer</td>
              <td>
                HTML,CSS,BOOTSTRAP,TAILWIND CSS,JAVASCRIPT,NODE JS,EXPRESS
                JS,MONGODB,REACT JS,GITHUB,HEROKU
              </td>
            </tr>
            <tr>
              <th>5</th>
              <td>EMAIL</td>
              <td>maheshbiswas26@gmail.com</td>
            </tr>
            <tr>
              <th>6</th>
              <td>Address</td>
              <td>Narail sadar Narail</td>
            </tr>
            <tr className="active">
              <th>7</th>
              <td>Project Link 1</td>
              <td>Tax Accountant</td>
            </tr>
            <tr className="active">
              <th>8</th>
              <td>Project Link 2</td>
              <td>Tax Accountant</td>
            </tr>
            <tr className="active">
              <th>9</th>
              <td>Project Link 3</td>
              <td>Tax Accountant</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPortfolio;
