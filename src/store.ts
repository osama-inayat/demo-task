import { User, Course, Cohort } from "./models";

// TODO: Give this user an id
export const exampleUsers: User[] = [{
  id: "1",
  name: "John Doe",
},
{
  id: "2",
  name: "Doe John",
},
{
  id: "3",
  name: "User 3",
},
{
  id: "4",
  name: "User 4",
},
{
  id: "5",
  name: "User 5",
},
{
  id: "6",
  name: "User 6",
},
{
  id: "7",
  name: "User 7",
},
{
  id: "8",
  name: "User 8",
},
{
  id: "9",
  name: "User 9",
},
];
export const exampleCourses: Course[] = [{
  id: "8EpIqAtYYDc7KWvxXGqd",
  name: "Python for Kids",
},
{
  id: "9ABpIqAtYYDc7KWvxXGqd",
  name: "Ruby for Kids",
},
{
  id: "P9CBpIqAtYYDc7KWvxXGqd",
  name: "Rails for Kids",
},
{
  id: "00HBpIqAtYYDc7KWvxXGqd",
  name: "Django for Kids",
},
{
  id: "ZBHHBpIqAtYYDc7KWvxXGqd",
  name: "Go for Kids",
},
{
  id: "ZBHHBptppAtYYDc7KWvxXGqd",
  name: "React for Kids",
},
];

export const exampleCohorts: Cohort[] = [
  {
    id: "cohort-1",
    course: "8EpIqAtYYDc7KWvxXGqd",
    coach: "Virat Kohli",
    members: ["1", "2"],
    time: "12:15",
    day: 1
  },
  {
    id: "cohort-2",
    course: "9ABpIqAtYYDc7KWvxXGqd",
    coach: "Naseem Shah",
    members: ["3", "4"],
    time: "10:25",
    day: 4
  },
  {
    id: "cohort-3",
    course: "P9CBpIqAtYYDc7KWvxXGqd",
    coach: "Haris Rauf",
    members: ["5", "6"],
    time: "12:15",
    day: 6
  },
  {
    id: "cohort-4",
    course: "00HBpIqAtYYDc7KWvxXGqd",
    coach: "David Warner",
    members: ["5", "6"],
    time: "09:25",
    day: 5
  },
  {
    id: "cohort-5",
    course: "ZBHHBpIqAtYYDc7KWvxXGqd",
    coach: "Mike Hussey",
    members: ["7", "8"],
    time: "07:25",
    day: 3
  },
  {
    id: "cohort-6",
    course: "ZBHHBptppAtYYDc7KWvxXGqd",
    coach: "Ricky Ponting",
    members: ["9", "10"],
    time: "11:25",
    day: 2
  },
];
