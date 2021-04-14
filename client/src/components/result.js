import React, { useEffect, useState } from 'react';
import 'survey-react/survey.css';

import MUIDataTable from "mui-datatables";
import axios from 'axios';

const Result = (prop) => {
  const [survey, setSurvey] = useState([])

  const columns = [
    {
      name: "a",
      label: "Судлаачын дугаар",
      options: {
        filter: true,
        sort: true,
        display: true,
      }
    },
    {
      name: "b",
      label: "Өвөрмөц ялгах код",
      options: {
        filter: true,
        sort: true,
        display: true,
      }
    },
    {
      name: "c",
      label: "Он сар өдөр",
      options: {
        filter: true,
        sort: true,
        display: true,
      }
    },
    {
      name: "d",
      label: "ХДХВ-ийн халдвар илрүүлэх шинжилгээг хамгийн сүүлд хаана өгсөн бэ?",
      options: {
        filter: true,
        sort: true,
        display: true,
      }
    },
  ]

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:5000/app/getSurvey",
    })
      .then(function (response) {
        setSurvey(response.data)
      })
      .catch(function (response) {
        console.log(response);
      });
  }, []);

  const options = {
    filterType: 'checkbox',
  };

  return (
    <MUIDataTable
      title={"Судалгаа"}
      data={survey}
      columns={columns}
      options={options}
    />
  )
}
export default Result;