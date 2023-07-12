import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Row, Col } from "reactstrap";
import ReactEcharts from 'echarts-for-react';
import { productAllocation } from "../../actions";

const Allocations = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  var colorPalette = ['#d2b62f', '#225e67', '#00e0f4', '#ea5386', '#3e7ddd'];
  const [isReady, setIsReady] = useState(false);
  const [allocations, setAllocations] = useState([]);
  useEffect(() => {
    if(!isReady){
      handleProductAllocation()
    }
    
  })
  
  const handleProductAllocation = () => {
      dispatch(productAllocation()).then((response) => {
        if (response.status === 200) {
          setIsReady(true)
          setAllocations(response.data.allocations)
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.message,
            background: "#23262f",
            confirmButtonColor: "#f27474",
            color: "#fff",
          });
        }
      });
  }

  const getOption = () => {
    return {
        toolbox: {
            show: false,
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'horizontal',
            left: 'center',
            data: ['Interconnection Dev', 'Reward Program', 'Team & Advisor', 'Marketing & General', 'Promotion / Marketing'],
            textStyle: {
                color: colorPalette,
            }
        },
        color: colorPalette,
        series: [
            {
                name: 'Total sales',
                type: 'pie',
                radius: '80%',
                center: ['50%', '55%'],
                data: allocations,
                selectedMode: 'single',
                itemStyle: {
                  borderRadius: 10,
                  textStyle: {
                    color: colorPalette,
                    backgroundColor: '#fff'
                },
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
};
  return (
    <Row className="justify-content-center mt-5 mb-5" id="allocations">
      <Col lg={6}>
        <div className="text-center">
          <p className="text-success font-weight-light">Allocations</p>
          <h1 className="text-white font-weight-light mt-3">
            Coin Allocation & Funds Distribution 
          </h1>
          <div className="text-dark mt-5 mb-5">
            <ReactEcharts style={{ height: "450px", background : "#fff", paddingTop: 20 }} option={getOption()} />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Allocations;
