import React from 'react';
import classNames from 'classnames';
import { Collapse } from 'antd'
import { Icon as CustomIcon } from 'common';
import './accordion.scss'

const { Panel } = Collapse;


interface IProps {
  defaultActiveKey?:string
  list: {
    icon: string;
    key: string;
    title: string;
    description: string;
  }[]
  className?: string;
}

const Accordion = (porps: IProps) => {
  const { className, list, defaultActiveKey } = porps
  const [active, setActive] = React.useState<string | string[]>(defaultActiveKey as string)
  const handleChange = React.useCallback((key: string | string[]) => {
    if(key && key !== active){
      setActive(key)
    }
  }, [active])
  const cls = classNames('erda-accordion', {
    [`${className}`]: !!className
  })
  return (
    <Collapse defaultActiveKey={defaultActiveKey} onChange={handleChange} ghost activeKey={active} accordion className={cls}>
      {
        list.map(({ key, title, description, icon }) => {
          const color = active === key
          const header = (
            <div className="flex-box erda-accordion-header flex-start pl8">
              {icon && <div className="erda-accordion-header-icon mr8 flex-box"><CustomIcon color={color} className="icon" type={icon} /></div>}
              <p className="erda-accordion-header-text">{title}</p>
            </div>
          )
          return (
            <Panel showArrow={false} key={key} header={header}>
              <div className="ml16 pl28 erda-accordion-body">
                {description}
              </div>
            </Panel>
          )
        })
      }

    </Collapse>
  )
}

export default Accordion;
