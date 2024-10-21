import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, TextField, MenuItem } from '@mui/material';
import { useSelector } from 'react-redux';

import { utilCurrencies } from './utils';
import { useInput } from '../../../../hooks/useInput';
import TextFieldInput from './inputmusicdata/TextFieldInput';
import { withStyles } from '@mui/styles';
import { style } from './uploadMusicStyle';

const UploadContents = ({ setData }) => {
  const { userData } = useSelector(state => state.user);
  const account = userData?.metamask;
  const router = useRouter();
  const artist = router.query.artistName;
  const [title, onChangeTitle] = useInput('');
  const [albumName, onChangeAlbumName] = useInput('');
  const [genre, onChangeGenre] = useInput('balad');
  const [release, onChangeRelease] = useInput('');
  const [songwriter, onChangeSongwriter] = useInput('');
  const [lyricist, onChangeLyricist] = useInput('');

  useEffect(() => {
    const dataToSubmit = {
      userName: userData?.name,
      title,
      artist,
      albumName,
      genre,
      release,
      songwriter,
      lyricist,
      account,
      createdAt: Date.now(),
    };

    setData(dataToSubmit);
  }, [
    setData,
    userData,
    title,
    artist,
    albumName,
    genre,
    release,
    songwriter,
    lyricist,
    account,
  ]);

  return (
    <Box sx={style.inputMusicDataContainer}>
      <TextFieldInput
        label="Title"
        value={title}
        func={onChangeTitle}
        required={true}
      />
      <TextFieldInput
        label="Artist"
        value={artist}
        required={true}
        inputprops={{ readOnly: true }}
      />
      <TextFieldInput
        label="Album name"
        value={albumName}
        func={onChangeAlbumName}
      />
      <CssTextField
        variant="standard"
        id="music_genre"
        select
        label="Genre"
        value={genre}
        onChange={onChangeGenre}
        sx={{
          width: '200px',
          margin: '10px 0',
          color: 'white',
          fontSize: '40px',
        }}
      >
        {utilCurrencies.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </CssTextField>
      <TextFieldInput
        label="Year of release"
        value={release}
        func={onChangeRelease}
      />
      <TextFieldInput
        label="Composer"
        value={songwriter}
        func={onChangeSongwriter}
      />
      <TextFieldInput
        label="Lyricist"
        value={lyricist}
        func={onChangeLyricist}
      />
    </Box>
  );
};

export default UploadContents;

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& .MuiSvgIcon-root': {
      color: 'white',
    },
    '& .MuiInput-root': {
      color: 'white',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
})(TextField);
