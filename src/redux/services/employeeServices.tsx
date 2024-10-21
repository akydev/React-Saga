import { IEmployee } from "../interface/IEmployee";

export async function AddEmployee(data: IEmployee): Promise<IEmployee> {
  return fetch("https://66fe248a69936930895731f9.mockapi.io/employee", {
    method: "POST",
    // headers: {
    //   "content-type": "application/json",
    // },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}
