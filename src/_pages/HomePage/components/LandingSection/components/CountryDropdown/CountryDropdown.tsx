import * as React from 'react';
import Box from '@mui/material/Box';
import TextField, {TextFieldProps} from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {AutocompleteProps} from "@mui/material/Autocomplete/Autocomplete";
import {countries} from "../NewsletterForm/NewsletterForm.constants";

export default function CountrySelect({style, name, value, onChange, ...rest}: AutocompleteProps & TextFieldProps) {
    return (
        <Autocomplete
            id="country-select-demo"
            sx={{ width: 300 }}
            style={{...style}}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.label}
            onChange={(e, value) => {
                onChange(value);
            }}
            renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=""
                    />
                    {option.label} ({option.code}) +{option.phone}
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Choose a country"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
}

