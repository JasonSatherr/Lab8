/**
 * @jest-environment jsdom
 */

 import { pushToHistory } from '../scripts/router.js';


 describe('History push', () =>{
     

    test('push settings state', ()=>{
        history = pushToHistory("settings");
        expect(history.length).toBe(2);
        expect(history.state).toStrictEqual({ page: 'settings' }, '', './#settings');
    });
    test('push default state', ()=>{
        history = pushToHistory();
        expect(history.length).toBe(3);
        expect(history.state).toStrictEqual({}, '', './');
    });
    test('push entry state', ()=>{
        history = pushToHistory("entry", 5);
        expect(history.length).toBe(4);
        expect(history.state).toStrictEqual({ page: `entry5` }, '', `./#entry5`);
    });

 });