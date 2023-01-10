import React, { MouseEventHandler } from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { SupersetTheme, useTheme } from '@superset-ui/core';

const { Text } = Typography;

interface HeaderViewTablePageProps {
  onBack: MouseEventHandler;
}

const HeaderViewTablePage = ({ onBack }: HeaderViewTablePageProps) => {
  const theme: SupersetTheme = useTheme();
  return (
    <Row>
      <Col style={{ marginRight: '12px' }}>
        <Button
          icon={<ArrowLeftOutlined />}
          style={{ background: 'none', color: theme.colors.quotron.black }}
          onClick={onBack}
        />
      </Col>
      <Col>
        <Text strong style={{ fontSize: '36px' }}>
          View Table
        </Text>
      </Col>
    </Row>
  );
};

export default HeaderViewTablePage;
