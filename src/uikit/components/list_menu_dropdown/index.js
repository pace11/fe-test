import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styled, { keyframes } from 'styled-components'
import utils from '../../../helper/utils'
import Theme from '../../common/theme'
import theme from '../../common/theme'

const ListContainer = styled.li`
  list-style-type: none;
  width: 100%;
  padding: 0;
  position: relative;
  &:before {
    content: '${(props) => (props.number ? props.number : '0')}';
    font-size: 10px;
    text-align: center;
    font-weight: bold;
    color: ${theme.colors.white};
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    bottom: 0;
    background: ${Theme.colors.gradientRed};
  }
  margin-bottom: 10px;
  cursor: pointer;
  -webkit-touch-callout:none;
  -webkit-user-select:none;
  -khtml-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  -webkit-tap-highlight-color:rgba(0,0,0,0);
`

const RowTitle = styled.div`
  display: inline;
  width: 100%;
  padding: 3px 5px;
  margin-left: 35px;
  background: ${theme.colors.gradientRed};
  position: relative;
  border-radius: 5px;
  color: ${Theme.colors.white};
  &:before {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-right: 15px solid ${Theme.colors.red};
    border-bottom: 10px solid transparent;
    left: -10px;
    top: 5px;
    z-index: -1;
  }
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

const AnimationShow = keyframes`
  from {
    transform: scale(0.6);
  }
  to {
    transform: scale(1);
  }
`

const RowContent = styled.div`
  width: auto;
  height: auto;
  background: ${theme.colors.gray5};
  border-radius: 10px;
  margin-bottom: 10px;
  margin-left: 35px;
  box-sizing: border-box;
  font-size: 14px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  animation-name: ${AnimationShow};
  animation-duration: 0.4s;
  div {
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    span:first-child {
      color: ${Theme.colors.red};
    }
    span:not(:first-child) {
      color: ${Theme.colors.gray};
    }
  }
  div:nth-child(odd) {
    background: ${Theme.colors.white};
  }
`

/**
 *
 * @param {Number} props.index
 * @param {String} props.name
 * @param {Number} props.recovered
 * @param {Number} props.positive
 * @param {Number} props.death
 */
export default function ListMenuDropdown({
  index,
  name,
  recovered,
  positive,
  death,
}) {
  const { t } = useTranslation()
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (index === 1) setShow((show) => !show)
  }, [index])

  return (
    <React.Fragment>
      <ListContainer number={index}>
        <RowTitle onClick={() => setShow((show) => !show)}>
          {name}
        </RowTitle>
      </ListContainer>
      {show && (
        <RowContent>
          {positive && (
            <div>
              <span>{t('list.positive')}</span>
              <span>
                {t('list.person', { value: utils.digit(positive) })}
              </span>
            </div>
          )}
          {recovered && (
            <div>
              <span>{t('list.recovered')}</span>
              <span>
                {t('list.person', { value: utils.digit(recovered) })}
              </span>
            </div>
          )}
          {death && (
            <div>
              <span>{t('list.death')}</span>
              <span>
                {t('list.person', { value: utils.digit(death) })}
              </span>
            </div>
          )}
        </RowContent>
      )}
    </React.Fragment>
  )
}
