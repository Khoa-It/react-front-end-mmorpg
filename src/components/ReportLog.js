// src/components/ReportLog.js
import React from 'react';
import "./ReportLog.css"

const ReportLog = () => {
  // Dữ liệu mẫu cho bảng log
  const logData = [
    {
      "userId": 2,
      "username": "nguyen dang khoa",
      "password": "123456",
      "email": "ndk@gmail.com",
      "createdDate": "2024-11-17T12:47:56.0272123",
      "lastLogin": "0001-01-01T00:00:00"
    },
    {
      "userId": 4,
      "username": "Võ Văn Hùng",
      "password": "123456",
      "email": "vvh@gmail.com",
      "createdDate": "2024-11-17T14:46:16.6903919",
      "lastLogin": "0001-01-01T00:00:00"
    }
  ];

  return (
    <div className="report-log">
      <div className="report-header">
        <h2>Báo Cáo Đăng Nhập/Đăng Xuất</h2>
      </div>
      <div className="report-table-container">
        <table className="report-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên người dùng</th>
              <th>Thời gian đăng nhập lần cuối</th>
            </tr>
          </thead>
          <tbody>
            {logData.map((log, index) => (
              <tr key={log.userId}>
                <td>{index + 1}</td>
                <td>{log.username}</td>
                <td>{log.lastLogin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportLog;