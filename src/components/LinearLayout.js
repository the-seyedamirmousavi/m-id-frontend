import React from 'react';

const LinearLayout = ({
  direction = 'row',
  children,
  style,
  alignItems = 'stretch',
  justifyContent = 'flex-start',
  height = '100vh',
  padding,
  positon,
  width,
  overflowY, // مقدار پیش‌فرض اسکرول
  scrollable = false,  // کنترل اسکرول از بیرون
}) => {
  const layoutStyle = {
    display: 'flex',
    flexDirection: direction === 'vertical' ? 'column' : 'row',
    justifyContent: justifyContent,
    alignItems: alignItems,
    height: height,
    width: width,
    padding : padding,
    positon: positon,
    overflowX: 'hidden',
    overflowY: scrollable ? overflowY : 'hidden', // غیرفعال‌کردن اسکرول در صورت نیاز

    ...style,
  };

  return <div style={layoutStyle}>{children}</div>;
};

export default LinearLayout;
