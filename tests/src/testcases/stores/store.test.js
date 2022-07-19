import {Root} from './store';
import {jsx} from 'core.pkg';
import {createStore} from 'store.pkg';
import {renderView, cleanupView} from '../../../testUtils';
import {screen, waitFor} from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

describe('store.test.js', () => {
    const setMockValue = jest.fn();

    beforeEach(() => {
        jest.useFakeTimers();
        renderView(<Root setMockValue={setMockValue}/>);
    });

    it('Must create store is object', () => {
        expect(() => createStore(null)).toThrowError(Error);
        expect(() => createStore('string')).toThrowError(Error);
        expect(() => createStore(3)).toThrowError(Error);
    });

    it('Components rendered correct when store updated',async () => {
        expect(screen.getByTestId('header').textContent).toBe('Header: ');
        expect(screen.getByTestId('footer-title').textContent).toBe('Footer: ');
        jest.runAllTimers();
        setMockValue.mockReturnValue('Menu');
        userEvent.click(screen.getByTestId('header-btn'));

        await waitFor(() => {
            expect(screen.getByTestId('header').textContent).toBe('Header: Menu');
            expect(screen.getByTestId('footer-title').textContent).toBe('Footer: Menu');
        });
    });

    it('Components rendered correct when Children Components updated updated store',async () => {
        expect(screen.getByTestId('nav-list').textContent).toBe('Nav List: ');
        expect(screen.getByTestId('footer-nav-list').textContent).toBe('Nav list: ');
        jest.runAllTimers();
        setMockValue.mockReturnValue(1);
        userEvent.click(screen.getByTestId('nav-list-btn'));

        await waitFor(() => {
            expect(screen.getByTestId('nav-list').textContent).toBe('Nav List: 1');
            expect(screen.getByTestId('footer-nav-list').textContent).toBe('Nav list: 1');
        });
    });

    it('Components rendered correct when store update functions called together', async () => {
        expect(screen.getByTestId('header').textContent).toBe('Header: ');
        expect(screen.getByTestId('nav-list').textContent).toBe('Nav List: ');
        jest.runAllTimers();
        setMockValue.mockReturnValue('Updated');
        userEvent.click(screen.getByTestId('set-multiple-btn'));

        await waitFor(() => {
            expect(screen.getByTestId('header').textContent).toBe('Header: Updated');
            expect(screen.getByTestId('footer-title').textContent).toBe('Footer: Updated');
            expect(screen.getByTestId('nav-list').textContent).toBe('Nav List: Updated');
            expect(screen.getByTestId('footer-nav-list').textContent).toBe('Nav list: Updated');
        });
    });

    it('Store update functions call in effect hook', async () => {
        jest.runAllTimers();
        setMockValue.mockReturnValue(3);
        userEvent.click(screen.getByTestId('nav-list-btn'));
        await waitFor(() => {
            expect(screen.getByTestId('nav-item').textContent).toBe('Nav Item: active');
        });
    });

    it('Store updated when component destroy functions called store update',async () => {
        jest.runAllTimers();
        setMockValue.mockReturnValue(1);
        userEvent.click(screen.getByTestId('nav-list-btn'));
        await waitFor(() => {
            expect(screen.getByTestId('footer-nav-item').textContent).toBe('Nav item: hidden');
        });
    });

    async function resetView() {
        userEvent.click(screen.getByTestId('reset-btn'));
        await waitFor(() => {
            expect(screen.getByTestId('header').textContent).toBe('Header: ');
            expect(screen.getByTestId('footer-title').textContent).toBe('Footer: ');
            expect(screen.getByTestId('nav-list').textContent).toBe('Nav List: ');
            expect(screen.getByTestId('footer-nav-list').textContent).toBe('Nav list: ');
        });
    }

    afterEach(async () => {
        await resetView();
        cleanupView();
        jest.resetAllMocks();
        jest.useRealTimers();
    });
});