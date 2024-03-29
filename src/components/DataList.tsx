import { useEffect, useState } from "react";

import { auth } from "../config/firebase";

import { useGetUserData } from "../hooks/firestore";

export const DataList = () => {
  const { data } = useGetUserData(auth.currentUser?.uid);
  const [tableKeys, setTableKeys] = useState<string[]>([]);

  useEffect(() => {
    if (data?.length && !tableKeys.length) {
      const keys = Object.keys(data?.length && data[1]) || [];
      if (Array.isArray(keys)) {
        setTableKeys(keys);
      }
    }
  }, [data?.length, tableKeys]);

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            {tableKeys?.map((key) => {
              return <th key={key}>{key}</th>;
            })}
          </tr>
        </thead>

        <tbody>
          {data?.map((rowItem: (typeof data)[1]) => {
            return (
              <tr>
                {Object.values(rowItem)?.map((cellItem) => {
                  return <td>{(cellItem as string).toString()}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
