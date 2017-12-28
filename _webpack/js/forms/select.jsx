// @flow

import React from 'react';
import classnames from 'classnames';
import { control } from 'react-validation';

type Props = {
  error: string,
  isChanged: boolean,
  isUsed: boolean,
  label: string,
  note: string,
  className?: string
};

const Select = ({ error, isUsed, note, ...props }: Props) => (
  <div className={classnames(['form-group', { 'has-danger': isUsed && error }])}>
    <select
      {...props}
      className={classnames([
        'form-control',
        props.className,
        { 'form-control-danger is-invalid': isUsed && error }
      ])}
    />
    {isUsed && error ? (
      <small className="form-text form-control-feedback invalid-feedback">{error}</small>
    ) : (
      ''
    )}
    {note ? <small className="form-text text-muted">{note}</small> : ''}
  </div>
);

export default control(Select);
