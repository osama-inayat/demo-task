import { useEffect, useState } from "react";
import { exampleCohorts } from "./../store";
import { Cohort } from "./../models";

const useCohortOperations = () => {
  const [cohorts, setCohorts] = useState(exampleCohorts);
  const [activeUser, setActiveUser] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 2000);
  }, [error]);

  const interceptCohortMembers = (
    cohortId: string,
    action: "add" | "remove"
  ): void => {
    let tempCohorts = [...cohorts];
    let cohort = findCohort(cohortId);
    if (cohort) {
      const index = cohorts.indexOf(cohort);
      if (action === "add") {
        addMemberToCohort(cohort);
      } else {
        removedMemberFromCohort(cohort);
      }
      tempCohorts[index] = cohort;
      setCohorts(tempCohorts);
    }
  };

  const activeUserCohorts = (isMember: boolean) =>
    cohorts.filter(({ members }) =>
      isMember ? members.includes(activeUser) : !members.includes(activeUser)
    );
  const addMemberToCohort = (cohort: Cohort) => {
    if (!cohort.members.includes(activeUser)) {
      const isClashing = activeUserCohorts(true).some(
        ({ time }) => time === cohort.time
      );
      isClashing
        ? setError("Cannot Join because of Time Clash")
        : cohort.members.push(activeUser);
    }
  };
  const removedMemberFromCohort = (cohort: Cohort) => {
    if (cohort.members.includes(activeUser)) {
      cohort.members = cohort.members.filter((member) => member !== activeUser);
    }
  };

  const findCohort = (cohortId: string): Cohort | undefined =>
    cohorts.find(({ id }) => id === cohortId);

  return [
    cohorts,
    interceptCohortMembers,
    activeUserCohorts,
    activeUser,
    setActiveUser,
    error,
  ] as const;
};
export default useCohortOperations;
