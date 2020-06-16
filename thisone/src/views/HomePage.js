import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          {/* CODE GOES HERE INSIDE THE <DIV> */}
          <h2>This is an example</h2>
        </div>
      </>
    );
  }
}

export default HomePage;
