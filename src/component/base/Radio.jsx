import React, { useState } from "react";

export default function Radio() {
  const listGender = [
    {
      id: 0,
      title: "Nam",
    },
    {
      id: 1,
      title: "Nữ",
    },
    {
      id: 2,
      title: "Khác",
    },
  ];

  const [value, setValue] = useState(); // không thêm gì vào useState thì mặc định là undefine
  // nếu muốn mặc định là thg nào thì truyền id vào ngoặc
  const handleCheck = (id) => {
    // cập nhật lại state để lấy value của checkbox
    setValue(id);
  };

  return (
    <>
      {listGender.map((gender) => (
        <div>
          <label htmlFor="male">{gender.title}</label>
          <input
            type="radio"
            checked={gender.id === value}
            onChange={(e) => handleCheck(gender.id)}
          />
        </div>
      ))}

      {/* <div>
        <label htmlFor="male">Nam</label>
        <input type="radio" id="male" name="gender" />
      </div>
      <div>
        <label htmlFor="female">Nữ</label>
        <input type="radio" id="female" name="gender" />
      </div>
      <div>
        <label htmlFor="other">Khác</label>
        <input type="radio" id="other" name="gender" />
      </div> */}
    </>
  );
}
