import React, { useState } from 'react';
import { getJoin } from '../global';
import { useTheme } from '@mui/material/styles';
import Calendar from 'react-calendar';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import 'react-calendar/dist/Calendar.css';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = [
  'Company 1',
  'Company 2',
  'Company 3',
  'Company 4',
  'Not Mention',
];

function getStyles(name, companyName, theme) {
  return {
    fontWeight:
      companyName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const SelectPlan = () => {
  const theme = useTheme();

  const [companyDetails, setCompanyDetails] = useState({
    name: '',
    url: '',
    address: '',
    description: '',
    meetingDate: '',
  });
  const [availableDates, setAvailableDates] = useState([]);
  const [companyName, setCompanyName] = useState('');

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setCompanyDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  const handleCalendarChange = (date) => {
    if (availableDates.includes(date)) {
      setAvailableDates(availableDates.filter((d) => d !== date));
    } else {
      setAvailableDates([...availableDates, date]);
    }
  };

  const handleSelectDate = (date) => {
    setCompanyDetails((prevDetails) => ({
      ...prevDetails,
      meetingDate: date,
    }));
  };

  return (
    <div className="bg-white shadow-md rounded px-8 py-6 max-w-md mx-auto">
      {getJoin() === 'company' && (
        <>
          <h1>No Plans For Company Click For Next</h1>
        </>
      )}
      {getJoin() === 'team' && (
        <>
          {/* Render the input fields and calendar for team */}
          <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
            <Select
              displayEmpty
              value={companyName}
              onChange={(event) => setCompanyName(event.target.value)}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (!selected) {
                  return <em>Select Company</em>;
                }
                return selected;
              }}
              MenuProps={MenuProps}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem disabled value="">
                <em>Select Company</em>
              </MenuItem>
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, companyName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {companyName === 'Not Mention' && (
            <>
              <label className="block text-gray-700 font-bold mb-2 my-2" htmlFor="companyName">
                Company Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={companyDetails.name}
                onChange={handleInputChange}
                placeholder="Enter company Name"
              />

              <label className="block text-gray-700 font-bold mb-2 my-2" htmlFor="companyUrl">
                Company URL
              </label>
              <input
                type="text"
                id="url"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={companyDetails.url}
                onChange={handleInputChange}
                placeholder="Enter company URL"
              />

              <label className="block text-gray-700 font-bold mb-2 my-2" htmlFor="companyAddress">
                Company Address
              </label>
              <input
                type="text"
                id="address"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={companyDetails.address}
                onChange={handleInputChange}
                placeholder="Enter company Address"
              />

              <label className="block text-gray-700 font-bold mb-2 my-2" htmlFor="companyDescription">
                Company Description
              </label>
              <textarea
                id="description"
                className="border border-gray-300 rounded p-2 resize-none focus:outline-none focus:ring focus:border-blue-500"
                rows={6}
                cols={45}
                value={companyDetails.description}
                onChange={handleInputChange}
                placeholder="Enter your text"
              />

              <label className="block text-gray-700 font-bold mb-2 my-2" htmlFor="teamMeeting">
                Schedule Meeting
              </label>
              <Calendar
                value={companyDetails.meetingDate}
                onClickDay={handleSelectDate}
                tileClassName={({ date, view }) =>
                  view === 'month' && availableDates.includes(date) ? 'available' : null
                }
                onChange={handleCalendarChange}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default SelectPlan;
