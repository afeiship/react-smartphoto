import React from 'react';
import ReactList from '@jswork/react-list';
import SmartPhoto from 'smartphoto';
import clsx from 'classnames';

const CLASS_NAME = 'react-smartphoto';

interface SmartphotoOptions {
  arrows?: boolean;
  nav?: boolean;
  useOrientationApi?: boolean;
  resizeStyle?: 'fill' | 'fit';
  animationSpeed?: number;
  forceInterval?: number;
}

interface TemplateProps {
  (inEvent: { item: any; index: number; items: any[] }): React.ReactNode;
}

export interface ReactSmartphotoProps {
  className?: string;
  items: any[];
  template?: TemplateProps;
  as?: React.ElementType;
  asProps?: any;
  options?: SmartphotoOptions;
}

export default class ReactSmartphoto extends React.Component<ReactSmartphotoProps> {
  static displayName = CLASS_NAME;
  private smartphoto: SmartPhoto;

  componentDidMount() {
    const { options } = this.props;
    this.smartphoto = new SmartPhoto(`.${CLASS_NAME}__item`, options);
  }

  template = ({ item, index }) => {
    return (
      <a key={index} href={item.url} data-caption={item.caption} className={`${CLASS_NAME}__item`}>
        <img src={item.url} alt="" />
      </a>
    );
  };

  render() {
    const { items, template, options, className, ...props } = this.props;
    return (
      <ReactList
        className={clsx(CLASS_NAME, className)}
        as="div"
        items={items}
        template={this.template}
        {...props}
      />
    );
  }
}
