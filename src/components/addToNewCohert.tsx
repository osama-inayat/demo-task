import { useState } from "react";
import Dropdown from "./shared/dropdown";
import { AddToNewCohertProps } from "./../interfaces/components/props";

const AddToNewCohert = ({
  cohorts,
  onChange,
  error,
}: AddToNewCohertProps): JSX.Element => {
  const [value, setValue] = useState<string>("");
  const changeHanlder = (): void => {
    onChange(value, "add");
    setValue("");
  };
  return (
    <div className="row">
      <div className="col-6">
        <Dropdown
          id="cohorts-dropdown"
          label="Add User to New Cohort"
          value={value}
          options={cohorts}
          onChange={setValue}
          valueProp="id"
          optionLabelProp="id"
        />
      </div>
      <div className="col-4">
        <button
          className="btn btn-primary mt-4"
          onClick={changeHanlder}
          disabled={!value}
        >
          Join Cohort
        </button>
      </div>
      {error && (
        <div className="text-center ml-3 mt-4 alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export default AddToNewCohert;
