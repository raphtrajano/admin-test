import React, { useState, useEffect, useCallback } from "react";
import {
  Filter,
  ReferenceInput,
  SelectInput,
  Identifier,
  List,
  Datagrid,
  TextField,
  TextInput,
  ListContextProvider,
  useGetList,
  useListContext,
} from "react-admin";
import { Typography } from "@material-ui/core";
import { InputAdornment, Divider, Tabs, Tab } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

import { MilestonesWrapper } from "./Milestones.style";

const MilestonesFilter = (props) => (
  <Filter {...props}>
    <TextInput className="search-input"  label="Search" source="q" 
    InputProps={{
    endAdornment: (
      <InputAdornment position="end">
          <SearchIcon />
      </InputAdornment>
    )
  }} alwaysOn />
  </Filter>
);

const tabs = [
  { id: "all", name: "all" },
  { id: "open", name: "open" },
  { id: "completed", name: "completed" },
  { id: "expired", name: "expired" },
];

const useGetTotals = (filterValues: any) => {
  const { total: totalOpen } = useGetList(
    "milestones",
    { perPage: 1, page: 1 },
    { field: "board", order: "ASC" },
    { ...filterValues, status: "open" }
  );
  const { total: totalCompleted } = useGetList(
    "milestones",
    { perPage: 1, page: 1 },
    { field: "board", order: "ASC" },
    { ...filterValues, status: "completed" }
  );
  const { total: totalExpired } = useGetList(
    "milestones",
    { perPage: 1, page: 1 },
    { field: "board", order: "ASC" },
    { ...filterValues, status: "expired" }
  );
  let All;
  if (totalOpen && totalCompleted && totalExpired) {
    All = totalOpen + totalCompleted + totalExpired;
  }

  return {
    all: All,
    open: totalOpen,
    completed: totalCompleted,
    expired: totalExpired,
  };
};

export const TableList = (props) => {
  const listContext = useListContext();
  console.log("listContext", listContext);
  const { ids, data, filterValues, setFilters, displayedFilters } = listContext;
  const [all, setAll] = useState<Identifier[]>([] as Identifier[]);
  const [open, setOpen] = useState<Identifier[]>([] as Identifier[]);
  const [completed, setCompleted] = useState<Identifier[]>([] as Identifier[]);
  const [expired, setExpired] = useState<Identifier[]>([] as Identifier[]);
  const totals = useGetTotals(filterValues) as any;
  console.log("totals", totals);
  console.log("filterValue", filterValues);

  useEffect(() => {
    if (ids && ids !== filterValues.status) {
      switch (filterValues.status) {
        case "open":
          setOpen(ids);
          break;
        case "completed":
          setCompleted(ids);
          break;
        case "expired":
          setExpired(ids);
          break;
      }
    }
  }, [ids, filterValues.status]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<{}>, value: any) => {
      setFilters &&
        setFilters({ ...filterValues, status: value }, displayedFilters);
    },
    [displayedFilters, filterValues, setFilters]
  );

  const selectedIds =
    filterValues.status === "open"
      ? open
      : filterValues.status === "completed"
      ? completed
      : expired;
  console.log("selectedIds", selectedIds);
  return (
    <>
      <Tabs
        variant="fullWidth"
        value={filterValues.status}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        {tabs.map((choice) => (
          <Tab
            key={choice.id}
            label={
              totals[choice.name]
                ? `${choice.name} (${totals[choice.name]})`
                : choice.name
            }
            value={choice.id}
          />
        ))}
      </Tabs>
      <Divider />
      {filterValues.status === "open" && (
        <ListContextProvider value={{ ...listContext, ids: open }}>
          <Datagrid {...props} optimized rowClick="edit">
            <TextField source="board" />
            <TextField source="educator" />
            <TextField source="title" />
          </Datagrid>
        </ListContextProvider>
      )}
      {filterValues.status === "completed" && (
        <ListContextProvider value={{ ...listContext, ids: completed }}>
          <Datagrid {...props} rowClick="edit">
            <TextField source="board" />
            <TextField source="educator" />
            <TextField source="title" />
          </Datagrid>
        </ListContextProvider>
      )}
      {filterValues.status === "expired" && (
        <ListContextProvider value={{ ...listContext, ids: expired }}>
          <Datagrid {...props} rowClick="edit">
            <TextField source="board" />
            <TextField source="educator" />
            <TextField source="title" />
          </Datagrid>
        </ListContextProvider>
      )}
      {filterValues.status === "all" && (
        <ListContextProvider value={{ ...listContext }}>
          <Datagrid rowClick="edit">
            <TextField source="board" />
            <TextField source="educator" />
            <TextField source="title" />
            <TextField source="status" />
          </Datagrid>
        </ListContextProvider>
      )}
      {/* ACERTAR ISSO */}
    </>
  );
};

export const MilestonesList = (props) => (
  <MilestonesWrapper>
    <Typography variant="h4" component="h1" align="center" className="title">
      My Tasks
    </Typography>
    <List filters={<MilestonesFilter />} title=" " {...props}>
      <TableList />
    </List>
  </MilestonesWrapper>
);
