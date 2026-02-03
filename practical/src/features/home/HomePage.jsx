import React from 'react';
import { PracticalCard } from './components/PracticalCard';

const PRACTICALS = [
    { id: 1, title: 'Practical 1: Hello World', description: 'Introduction to React components and JSX basics.', icon: '01' },
    { id: 2, title: 'Practical 2: Components', description: 'Building a UI with reusable Header and Footer components.', icon: '02' },
    { id: 3, title: 'Practical 3: Props', description: 'Passing data to reusable StudentCard component via props.', icon: '03' },
    { id: 4, title: 'Practical 4: State (Counter)', description: 'Interactive counter app using pure React useState hook.', icon: '04' },
    { id: 5, title: 'Practical 5: Routing', description: 'Building multi-page apps with React Router.', icon: '05' },
    { id: 6, title: 'Practical 6: Context API', description: 'Managing global state without prop drilling.', icon: '06' },
];

export const HomePage = () => {
    return (
        <div className="container">
            <div style={{ padding: '3rem 0', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--slate-900)', marginBottom: '0.5rem' }}>
                    Practical Labs
                </h1>
                <p style={{ color: 'var(--slate-500)', fontSize: '1.125rem' }}>
                    Select a module to begin your learning journey.
                </p>
            </div>

            <div className="grid-practicals">
                {PRACTICALS.map((practical) => (
                    <PracticalCard
                        key={practical.id}
                        title={practical.title}
                        description={practical.description}
                        icon={practical.icon}
                        link={`/practical-${practical.id}`}
                    />
                ))}
            </div>
        </div>
    );
};
