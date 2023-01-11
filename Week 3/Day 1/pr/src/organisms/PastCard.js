import React from "react";
import Button from "../atoms/Button";
import Card from "../atoms/Card";
import PastCount from "../molecules/PastCount";

const PastCard = (props) => {
  const { date, desc, visit } = props;
  return (
    <div class="row-fluid">
      <div class="grid-container">
        <div class="item">
          <Card>
            <b>{date}</b>
            <hr />
            <b>{desc}</b>
            <PastCount visit={visit} />
            <Button>View</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PastCard;
