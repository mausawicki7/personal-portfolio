import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="46"
      height="29"
      viewBox="0 0 46 29"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path
            d="M0,0.4h7.7l4.7,7.7l4.7-7.7h7.7v22h-7.3V11.5l-5.1,7.8h-0.1l-5.1-7.8v10.9H0V0.4z M25.2,19.1l3.9-4.7
	c2.2,1.7,4.8,2.6,7.7,2.6c1.3,0,1.9-0.3,1.9-0.9V16c0-0.6-1-1-3.1-1.4c-3-0.6-5.1-1.3-6.5-2.2c-1.9-1.2-2.8-2.8-2.8-4.9V7.4
	c0-2.2,0.8-3.9,2.4-5.3c1.7-1.4,4-2.1,7-2.1c4.1,0,7.4,1,9.9,3L42,8c-2-1.4-4.2-2.2-6.6-2.2c-1.1,0-1.6,0.3-1.6,0.9v0.1
	c0,0.6,1,1,2.9,1.4c3.1,0.6,5.4,1.3,6.8,2.3c1.7,1.2,2.6,2.8,2.6,4.8v0.1c0,2.3-0.9,4.1-2.6,5.5c-1.7,1.3-4.1,2-7.1,2
	C31.7,22.8,28,21.6,25.2,19.1z"
          />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />s
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
