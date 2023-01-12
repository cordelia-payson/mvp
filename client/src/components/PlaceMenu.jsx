import React, { useState } from 'react';
import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Form = styled(FormControl)`
  width: 150px;
`;

const Label = styled(InputLabel)``;

const Selected = styled(Select)``;

const Item = styled(MenuItem)``;

const countries = ['Britain', 'Canada', 'France', 'Italy', 'United States'];

function PlaceMenu(props) {
  const { place, setPlace } = props;
  const handleChange = (event) => {
    setPlace(event.target.value);
  };

  return (
    <div>
      <Form variant="standard">
        <Label>Country</Label>
        <Selected
          value={place}
          onChange={handleChange}
        >
          {countries.map((country) => <Item value={country} key={country}>{country}</Item>)}
        </Selected>
      </Form>
    </div>
  );
}

export default PlaceMenu;
