import React from "react";
import { coordinators } from "../../data/coordinators";

export const CoordinatorSection = ({ handleChange, inputValues, errors }) => {
  return (
    <div className="form-section">
      <h2 className="separator form-heading">Coordinator</h2>

      <div className="form-control">
        <label>responsible: *</label>
        <select
          onChange={handleChange}
          name="coordinator"
          className={`control ${errors.coordinator ? "input-error" : null} `}
        >
          <option value={""}>Select Responsible</option>
          {coordinators.map((coordinator) => {
            return (
              <option
                key={coordinator.id}
                value={`${coordinator.email}-${coordinator.id}`}
              >
                {coordinator.name} {coordinator.lastname}
              </option>
            );
          })}
        </select>

        {errors.coordinator && (
          <span className="error">{errors.coordinator}</span>
        )}
      </div>

      <div className="form-control">
        <label>email: </label>
        <input
          className={`control ${errors.email ? "input-error" : null}`}
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={inputValues.email}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
    </div>
  );
};
