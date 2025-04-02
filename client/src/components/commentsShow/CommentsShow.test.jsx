import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CommentsShow from './CommentsShow';

describe('CommentsShow', () => {
 

  it('displays a list of comments if provided', () => {
    const mockComments = [
      { _id: '1', email: 'john@example.com', comment: 'Amazing car!' },
      { _id: '2', email: 'jane@example.com', comment: 'Super fast and smooth.' }
    ];

    render(<CommentsShow comments={mockComments} />);

    expect(screen.getByText(/john@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Amazing car/i)).toBeInTheDocument();
    expect(screen.getByText(/jane@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Super fast and smooth/i)).toBeInTheDocument();
  });

  it('shows "No reviews." if no comments are passed', () => {
    render(<CommentsShow comments={[]} />);
    expect(screen.getByText(/no reviews/i)).toBeInTheDocument();
  });

  it('displays "unknown" if email is missing', () => {
    const mockComments = [
      { _id: '3', email: '', comment: 'Great experience!' }
    ];

    render(<CommentsShow comments={mockComments} />);
    expect(screen.getByText(/unknown:/i)).toBeInTheDocument();
    expect(screen.getByText(/great experience/i)).toBeInTheDocument();
  });
});
