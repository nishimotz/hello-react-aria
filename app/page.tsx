// app/page.tsx

"use client";
import './globals.css';

import React from 'react';
import { Button, Label, ListBox, ListBoxItem, Popover, Select, SelectValue } from 'react-aria-components';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <div>
        <Button onPress={() => alert('Button pressed!')}>
          押してください
        </Button>
      </div>
      <div>
        <Select>
          <Label>好みの動物</Label>
          <Button>
            <SelectValue />
            <span aria-hidden="true">▼</span>
          </Button>
          <Popover>
            <ListBox>
              <ListBoxItem>ネコ</ListBoxItem>
              <ListBoxItem>イヌ</ListBoxItem>
              <ListBoxItem>カンガルー</ListBoxItem>
            </ListBox>
          </Popover>
        </Select>
      </div>
    </div>
  );
}
