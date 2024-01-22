import React from 'react';
import ReactList, { ReactListProps } from '@jswork/react-list';
import SmartPhoto, { SmartPhotoOption } from 'smartphoto';
import clsx from 'classnames';

const CLASS_NAME = 'react-smartphoto';

export interface ReactSmartphotoProps extends ReactListProps {
  options?: SmartPhotoOption;
}

export default class ReactSmartphoto extends React.Component<ReactSmartphotoProps> {
  static displayName = CLASS_NAME;
  private smartphoto: SmartPhoto | null = null;

  componentDidMount() {
    const { options } = this.props;
    this.smartphoto = new SmartPhoto(`.${CLASS_NAME}__item`, options);
    console.log(this.smartphoto);
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
