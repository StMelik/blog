import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';
import { memo } from 'react';
import { useParams } from 'react-router';

interface DetailsContainerProps {
  className?: string;
}

export const DetailsContainer = memo((props: DetailsContainerProps) => {
  const { className } = props;

  const { id } = useParams<{ id: string }>();

  return (
    <Card
      className={className}
      padding='24'
      border='round'
      max
    >
      <ArticleDetails id={id} />
    </Card>
  );
});
