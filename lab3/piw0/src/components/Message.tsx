import React, { ReactElement } from "react";
import { useParams } from "react-router-dom";

export default function Message({
  children,
  to,
}: {
  children: (id: number) => ReactElement;
  to: "student" | "group";
}) {
  const { id } = useParams();
  return (
    <>
      <div>{`Message to ${to} of id ${id}`}</div>
      <input type="textarea" placeholder="message..." id="message" />
      {children(parseInt(id!, 10))}
    </>
  );
}
