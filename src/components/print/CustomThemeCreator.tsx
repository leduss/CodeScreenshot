'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Label } from '../ui/label';
import { useStore, CustomTheme } from '@/store/useStore';
import { useTranslation } from '@/hooks/useTranslation';
import { toast } from 'sonner';
import { Input } from '../ui/input';

const CustomThemeCreator = () => {
  const { addCustomTheme, customThemes } = useStore();
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [background, setBackground] = useState('#282c34');
  const [textColor, setTextColor] = useState('#abb2bf');
  const [lineNumbersColor, setLineNumbersColor] = useState('#636d83');
  const [highlightColor, setHighlightColor] = useState('#f1fa8c');

  const handleSave = () => {
    if (!name.trim()) {
      toast.error('Veuillez entrer un nom pour le thème');
      return;
    }

    const newTheme: CustomTheme = {
      id: `custom-${Date.now()}`,
      name: name.trim(),
      background,
      textColor,
      lineNumbersColor,
      highlightColor,
    };

    addCustomTheme(newTheme);
    toast.success('Thème personnalisé créé avec succès!');
    setName('');
  };

  return (
    <Card className="w-full">
      <CardHeader className="text-sm font-bold">
        Créer un thème personnalisé
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <Label htmlFor="theme-name">Nom</Label>
          <Input
            id="theme-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Mon thème"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1">
            <Label htmlFor="background">Arrière-plan</Label>
            <div className="flex items-center gap-2">
              <Input
                id="background"
                type="color"
                value={background}
                onChange={(e) => setBackground(e.target.value)}
                className="h-8 w-12 border-0 p-0"
              />
              <Input
                value={background}
                onChange={(e) => setBackground(e.target.value)}
                placeholder="#282c34"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="text-color">Texte</Label>
            <div className="flex items-center gap-2">
              <Input
                id="text-color"
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="h-8 w-12 border-0 p-0"
              />
              <Input
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                placeholder="#abb2bf"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="line-numbers-color">Numéros de ligne</Label>
            <div className="flex items-center gap-2">
              <Input
                id="line-numbers-color"
                type="color"
                value={lineNumbersColor}
                onChange={(e) => setLineNumbersColor(e.target.value)}
                className="h-8 w-12 border-0 p-0"
              />
              <Input
                value={lineNumbersColor}
                onChange={(e) => setLineNumbersColor(e.target.value)}
                placeholder="#636d83"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="highlight-color">Surlignage</Label>
            <div className="flex items-center gap-2">
              <Input
                id="highlight-color"
                type="color"
                value={highlightColor}
                onChange={(e) => setHighlightColor(e.target.value)}
                className="h-8 w-12 border-0 p-0"
              />
              <Input
                value={highlightColor}
                onChange={(e) => setHighlightColor(e.target.value)}
                placeholder="#f1fa8c"
              />
            </div>
          </div>
        </div>

        <Button onClick={handleSave} className="w-full">
          Sauvegarder le thème
        </Button>
      </CardContent>
    </Card>
  );
};

export default CustomThemeCreator;
