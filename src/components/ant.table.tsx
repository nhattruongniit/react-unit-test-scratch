import React from "react";
import { Space, Table, Tag } from "antd";
import type { TableProps } from "antd";

interface DataType {
  key: string;
  name: string;
  age: number;
  tags: string[];
}

function createData(key: string, name: string, age: number, tags: string[]) {
  return { key, name, age, tags };
}

const data: DataType[] = [
  createData("1", "Cupcake", 32, ["nice", "developer"]),
  createData("1", "Cupcake", 32, ["nice", "developer"]),
  createData("1", "Cupcake", 32, ["nice", "developer"]),
  createData("1", "Cupcake", 32, ["nice", "developer"]),
  createData("1", "Cupcake", 32, ["nice", "developer"]),
  createData("1", "Cupcake", 32, ["nice", "developer"]),
  createData("1", "Cupcake", 32, ["nice", "developer"]),
  createData("1", "Cupcake", 32, ["nice", "developer"]),
  createData("1", "Cupcake", 32, ["nice", "developer"]),
  createData("1", "Cupcake", 32, ["nice", "developer"]),
  createData("1", "Cupcake", 32, ["nice", "developer"]),
  createData("1", "Cupcake", 32, ["nice", "developer"]),
  createData("1", "Cupcake", 32, ["nice", "developer"]),
  createData("1", "Cupcake", 32, ["nice", "developer"]),
];

const AntTable: React.FC = () => {
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default AntTable;
