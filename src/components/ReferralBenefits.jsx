import React, { forwardRef } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow, styled } from '@mui/material';

const Section = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const TableStyled = styled(Table)(({ theme }) => ({
  marginTop: theme.spacing(4),
  width: 'auto',
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  '&.MuiTableCell-head': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    border: `2px solid ${theme.palette.primary.dark}`,
  },
}));

const ReferralBenefits = forwardRef((props, ref) => {
  return (
    <Section ref={ref}>
      <Typography variant="h4" gutterBottom>Referral Benefits</Typography>
      <TableStyled>
        <TableHead>
          <TableRow>
            <StyledTableCell>Referral Type</StyledTableCell>
            <StyledTableCell align="right">Benefit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Referral</TableCell>
            <TableCell align="right">₹500 for you and your friend after 30 days</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Additional Referrals</TableCell>
            <TableCell align="right">Earn an extra ₹100 for every additional referral</TableCell>
          </TableRow>
        </TableBody>
      </TableStyled>
    </Section>
  );
});

export default ReferralBenefits;
