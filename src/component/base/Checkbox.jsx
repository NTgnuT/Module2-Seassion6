import React, { useState } from "react";

export default function Checkbox() {
  const listJob = [
    {
      id: 1,
      job: "Java",
    },
    {
      id: 2,
      job: "JavaScript",
    },
    {
      id: 3,
      job: "C#",
    },
    {
      id: 4,
      job: "PHP",
    },
  ];

  // Mảng chứa danh sách công việc được chọn
  const [selectedJob, setSelectedJob] = useState([]);
  console.log("selectedJob", selectedJob);

  // hàm xử lý checkbox
  const handleCheck = (id) => {
    if (selectedJob.includes(id)) {
      // nếu như id đã tồn tại trong mảng thì lọc ra những giá trị khác với id được check
      setSelectedJob(selectedJob.filter((job) => job !== id));
    } else {
      // nếu không tồn tại thì push vào trong mảng
      setSelectedJob([...selectedJob, id]);
    }
  };

  return (
    <div>
      {listJob.map((j, id) => (
        <div key={id}>
          <input
            type="checkbox"
            onChange={() => handleCheck(j.id)}
            checked={selectedJob.includes(j.id)}
          />
          {j.job}
        </div>
      ))}
    </div>
  );
}
