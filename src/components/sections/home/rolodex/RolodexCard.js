// components/RolodexCard.js

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';

const GlassEffectCard = styled(Card)(({ theme, isFocused }) => ({
  backdropFilter: 'blur(4px)',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: isFocused ? 'scale(1)' : 'scale(0.85)',
  opacity: isFocused ? 1 : 0.5,
  filter: isFocused ? 'none' : 'blur(8px)',
}));

const RolodexCard = ({ content, isFocused }) => {
  return (
    <GlassEffectCard isFocused={isFocused}>
      <CardContent>{content}</CardContent>
    </GlassEffectCard>
  );
};

export default RolodexCard;
