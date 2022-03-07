import React from "react";

export const TableHeader: React.FC = () => {
  return (
    <thead className="bg-light">
      <tr>
        <th className=" text-center">Picture</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Job Title</th>
        <th>Department</th>
        <th>Location</th>
        <th className=" text-center">Email</th>
        <th>Start Date</th>
      </tr>
    </thead>
  );
};
