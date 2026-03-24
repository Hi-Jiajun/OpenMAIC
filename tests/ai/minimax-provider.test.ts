import { describe, expect, it } from 'vitest';

import { getProvider } from '@/lib/ai/providers';

describe('MiniMax provider defaults', () => {
  it('uses the Anthropic-compatible v1 endpoint by default', () => {
    expect(getProvider('minimax')?.defaultBaseUrl).toBe('https://api.minimaxi.com/anthropic/v1');
  });

  it('includes the MiniMax-M2.7 model', () => {
    const modelIds = getProvider('minimax')?.models.map((model) => model.id) ?? [];
    expect(modelIds).toContain('MiniMax-M2.7');
  });
});
