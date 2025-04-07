import _Skeleton, { type SkeletonProps, SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Skeleton(props: SkeletonProps) {
  return (
    <SkeletonTheme baseColor="#F1F2F1" highlightColor="#EBECEB">
      <_Skeleton {...props} />
    </SkeletonTheme>
  );
}
