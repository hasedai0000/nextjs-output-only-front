/**
 * Event
 *
 * @package interface
 */

/**
 * EventType
 */
export interface EventType {
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTextArea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
