import React from 'react';
import { PracticalCard } from './components/PracticalCard';

const PRACTICALS = [
    { id: 1, title: 'Practical 1: Hello World', description: 'Introduction to React components and JSX basics.', icon: '01' },
    { id: 2, title: 'Practical 2: Components', description: 'Building a UI with reusable Header and Footer components.', icon: '02' },
    { id: 3, title: 'Practical 3: Props', description: 'Passing data to reusable StudentCard component via props.', icon: '03' },
    { id: 4, title: 'Practical 4: State (Counter)', description: 'Interactive counter app using pure React useState hook.', icon: '04' },
    { id: 5, title: 'Practical 5: Lifecycle (Effects)', description: 'Demonstrating Mount vs Update phases with useEffect.', icon: '05' },
    { id: 6, title: 'Practical 6: Conditional Rendering', description: 'Login/Logout panel using ternary operators.', icon: '06' },
    { id: 7, title: 'Practical 7: Forms & Validation', description: 'Student Registration form with constraints.', icon: '07' },
    { id: 8, title: 'Practical 8: React Router', description: 'Mini-app with Nested Routes (Home, About, Contact).', icon: '08' },
    { id: 9, title: 'Practical 9: API Fetching', description: 'Fetching data from JSONPlaceholder with loading states.', icon: '09' },
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
