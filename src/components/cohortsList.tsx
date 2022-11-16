import { exampleCourses } from "./../store";
import { CohortsListProps } from "./../interfaces/components/props"

const CohortsList = ({
  cohorts,
  title,
  showMembers,
  removeUserFromCohort,
  showActions,
}: CohortsListProps): JSX.Element => {
  const courseName = (courseId: string): string | undefined => {
    return exampleCourses.find(({ id }) => id === courseId)?.name;
  };

  const removeActionData = (id: string): JSX.Element => (
    <>
      {showActions && removeUserFromCohort && (
        <td
          onClick={() => removeUserFromCohort(id, 'remove')}
          className="badge badge-danger cursor-pointer"
        >
          Leave Cohort
        </td>
      )}
    </>
  );
  if (!cohorts.length) return <h3>No Data</h3>;
  return (
    <>
      <h1>{title}</h1>
      <table className="table table-striped table-bordered table-hover text-center">
        <thead className="thead-dark">
          <tr>
            <th>id</th>
            <th>Course</th>
            <th>Coach</th>
            {showMembers && <th>Members Count</th>}
            <th>Time</th>
            <th>Day</th>
            {showActions && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {cohorts.map(({ id, course, coach, members, time, day }) => (
            <tr key={id}>
              <th> {id}</th>
              <td>{courseName(course)}</td>
              <td>{coach}</td>
              {showMembers && <td>{members.length}</td>}
              <td>{time}</td>
              <td>{day}</td>
              {removeActionData(id)}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CohortsList;
