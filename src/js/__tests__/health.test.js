import calculateHealthIndicator from '../health';

test('should return "healthy" when health > 50', () => {
    expect(calculateHealthIndicator({ name: 'max', health: 51 })).toBe('healthy');
    expect(calculateHealthIndicator({ name: 'max', health: 100 })).toBe('healthy');
});

test('should return "wounded" when health between 15 and 50 (inclusive)', () => {
    expect(calculateHealthIndicator({ name: 'max', health: 50 })).toBe('wounded');
    expect(calculateHealthIndicator({ name: 'max', health: 30 })).toBe('wounded');
    expect(calculateHealthIndicator({ name: 'max', health: 15 })).toBe('wounded');
});

test('should return "critical" when health < 15', () => {
    expect(calculateHealthIndicator({ name: 'max', health: 14 })).toBe('critical');
    expect(calculateHealthIndicator({ name: 'max', health: 0 })).toBe('critical');
    expect(calculateHealthIndicator({ name: 'max', health: -1 })).toBe('critical');
});